import * as ts from "typescript";

export interface SteamMethodParameterDescriptor {
    name: string;
    type: string;
    optional: boolean;
    description: string;
}

export interface SteamMethodDescriptor {
    name: string;
    version: number;
    httpmethod: "GET" | "POST";
    description: string;
    parameters: SteamMethodParameterDescriptor[];
}

export interface SteamInterfaceDescriptor {
    name: string;
    methods: SteamMethodDescriptor[];
}

export interface SteamApiDescriptor {
    apilist: {
        interfaces: SteamInterfaceDescriptor[];
    };
}

export function buildApi(apiDescriptor: SteamApiDescriptor) {
    const apiNodeList = createApiNodeList(apiDescriptor);

    const resultFile = ts.createSourceFile(
        "", "", ts.ScriptTarget.Latest, false, ts.ScriptKind.TS,
    );

    const printer = ts.createPrinter({
        newLine: ts.NewLineKind.LineFeed,
    });

    const code = printer.printList(ts.ListFormat.MultiLine, apiNodeList, resultFile);

    return [
        "/* eslint-disable */",
        code,
    ].join("\n");
}

function createApiNodeList(apiDescriptor: SteamApiDescriptor) {
    const importApiBase = ts.createImportDeclaration(
        undefined,
        undefined,
        ts.createImportClause(
            undefined,
            ts.createNamedImports([
                ts.createImportSpecifier(undefined, ts.createIdentifier("SteamApiBase")),
            ]),
        ),
        ts.createLiteral("./steam-api-base"),
    );

    const importInterfaceBase = ts.createImportDeclaration(
        undefined,
        undefined,
        ts.createImportClause(
            undefined,
            ts.createNamedImports([
                ts.createImportSpecifier(undefined, ts.createIdentifier("SteamInterfaceBase")),
            ]),
        ),
        ts.createLiteral("./steam-interface-base"),
    );

    const interfaceClassList = apiDescriptor.apilist.interfaces.
        map(createSteamInterfaceClass);

    const apiClassItem = createApiClass(apiDescriptor);

    return ts.createNodeArray([
        importApiBase,
        importInterfaceBase,
        apiClassItem,
        ...interfaceClassList,
    ]);
}

function createApiClass(apiDescriptor: SteamApiDescriptor) {
    const interfaceMemberList = apiDescriptor.apilist.interfaces.
        map(createSteamInterfaceMember);

    const apiClassItem = ts.createClassDeclaration(
        undefined,
        [ts.createToken(ts.SyntaxKind.ExportKeyword)],
        "SteamApi",
        undefined,
        [
            ts.createHeritageClause(
                ts.SyntaxKind.ExtendsKeyword,
                [ts.createExpressionWithTypeArguments([], ts.createIdentifier("SteamApiBase"))],
            ),
        ],
        interfaceMemberList,
    );

    return apiClassItem;
}

function createSteamInterfaceClass(interfaceDescriptor: SteamInterfaceDescriptor) {
    const methodMemberList = interfaceDescriptor.methods.
        map(createSteamMethodMember);
    const constructorNode = ts.createConstructor(
        undefined,
        undefined,
        [
            ts.createParameter(
                undefined,
                undefined,
                undefined,
                "api",
                undefined,
                ts.createTypeReferenceNode("SteamApi", undefined),
                undefined,
            ),
        ],
        ts.createBlock([
            ts.createStatement(ts.createCall(
                ts.createSuper(),
                undefined,
                [
                    ts.createLiteral(interfaceDescriptor.name),
                    ts.createIdentifier("api"),
                ],
            )),
        ], true),
    );

    const interfaceClassItem = ts.createClassDeclaration(
        undefined,
        [ts.createToken(ts.SyntaxKind.ExportKeyword)],
        interfaceDescriptor.name,
        undefined,
        [
            ts.createHeritageClause(
                ts.SyntaxKind.ExtendsKeyword,
                [ts.createExpressionWithTypeArguments([], ts.createIdentifier("SteamInterfaceBase"))],
            ),
        ],
        [constructorNode, ...methodMemberList],
    );

    return interfaceClassItem;
}

function createSteamInterfaceMember(interfaceDescriptor: SteamInterfaceDescriptor) {
    const methodMemberItem = ts.createProperty(
        [],
        [
            ts.createToken(ts.SyntaxKind.PublicKeyword),
            ts.createToken(ts.SyntaxKind.ReadonlyKeyword),
        ],
        interfaceDescriptor.name,
        undefined,
        undefined,
        ts.createNew(ts.createIdentifier(interfaceDescriptor.name), undefined, [ts.createThis()]),
    );

    return methodMemberItem;
}

function createSteamMethodMember(methodDescriptor: SteamMethodDescriptor) {
    const methodParameterList = methodDescriptor.parameters.
        map(createSteamMethodParameter);

    const statements: ts.Statement[] = [
        ts.createReturn(ts.createCall(
            ts.createPropertyAccess(
                ts.createThis(),
                "fetch",
            ),
            undefined,
            [
                ts.createLiteral(methodDescriptor.httpmethod),
                ts.createLiteral(methodDescriptor.name),
                ts.createLiteral(methodDescriptor.version),
                ts.createObjectLiteral(methodDescriptor.parameters.map(
                    parameter =>
                        ts.createShorthandPropertyAssignment(fixParameterName(parameter.name)),
                ), false),
            ],
        )),
    ];

    const body = ts.createBlock(statements, true);

    const methodMemberItem = ts.createMethod(
        [],
        [ts.createToken(ts.SyntaxKind.PublicKeyword)],
        undefined,
        `${methodDescriptor.name}${methodDescriptor.version}`,
        undefined,
        undefined,
        methodParameterList,
        undefined,
        body,
    );

    return methodMemberItem;
}

function createSteamMethodParameter(parameterDescriptor: SteamMethodParameterDescriptor) {
    let type: ts.KeywordTypeNode;
    switch (parameterDescriptor.type) {
        case "int64":
        case "uint64":
        case "string":
        case "rawbinary":
            type = ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword);
            break;

        case "int16":
        case "uint16":
        case "int32":
        case "uint32":
            type = ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword);
            break;

        default:
            type = ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword);
    }

    const methodParameterItem = ts.createParameter(
        undefined,
        undefined,
        undefined,
        fixParameterName(parameterDescriptor.name),
        undefined,
        type,
        undefined,
    );

    return methodParameterItem;
}

function fixParameterName(value: string) {
    return value.replace(/\W+/g, "");
}
