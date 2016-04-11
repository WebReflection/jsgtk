var fs=require("fs");
fs.writeFileSync(
  "jsgtk_modules/jsgtk/babel.js",
  fs.readFileSync(
    "node_modules/babel-standalone/babel.min.js"
  )
    .toString()
    .replace(
      new RegExp(
        'ClassDeclaration:function ClassDeclaration(path){var node=path.node;var ref=node.id||path.scope.generateUidIdentifier("class");path.replaceWith(t.variableDeclaration("let",[t.variableDeclarator(ref,t.toExpression(node))]))},'.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"),
        'g'
      ),
      (`
ClassDeclaration: function ClassDeclaration(path) {
  var node = path.node;
  var ref = node.id || path.scope.generateUidIdentifier("class");
  path.replaceWith(
    t.variableDeclaration(
      "let", [
        t.variableDeclarator(
          ref,
          t.callExpression(
            t.functionExpression(
              null,
              [],
              t.blockStatement([
                t.variableDeclaration(
                  "let", [
                    t.variableDeclarator(
                      ref,
                      t.toExpression(node)
                    )
                  ]
                ),
                t.returnStatement(
                  t.callExpression(
                    t.identifier("imports.jsgtk.extended.Class"),
                    [ref]
                  )
                )
              ])
            ),
            []
          )
        )
      ]
    )
  )
},
`)
      .replace(/(function|var) /g, '$1\x01')
      .replace(/\s+/g, '')
      .replace(/(function|var)\x01/g, '$1 ')
    )
);