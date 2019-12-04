// @autogenerated


export default [
  {
    "mustache": "// Developer note: ensure your \".mustache\" files are imported as plain text. In Webpack you might use https://github.com/webpack-contrib/raw-loader\nimport Mustache from \"mustache\";\nimport FileUpload from \"@govtnz/ds/build/mustache/FileUpload.mustache\";\n\n// The variables FileUpload are all strings that are mustache templates.\n\nexport default `${Mustache.render(FileUpload, {})}`;\n",
    "silverstripe-components": "",
    "react-js": "import React from \"react\";\nimport FileUpload from \"@govtnz/ds/build/react-js/FileUpload\";\nimport \"@govtnz/ds/build/css/FileUpload.css\"; // or @govtnz/ds/build/scss/FileUpload.scss\n\nexport default () => <FileUpload />;\n",
    "react-ts": "import * as React from \"react\";\nimport * as FileUpload from \"@govtnz/ds/build/react-ts/FileUpload\";\nimport \"@govtnz/ds/build/css/FileUpload.css\"; // or @govtnz/ds/build/scss/FileUpload.scss\n\nexport default () => <FileUpload />;\n",
    "react-js-styled-components": "import React from \"react\";\nimport FileUpload from \"@govtnz/ds/build/react-js-styled-components/FileUpload\";\n\nexport default () => <FileUpload />;\n",
    "react-ts-styled-components": "import * as React from \"react\";\nimport * as FileUpload from \"@govtnz/ds/build/react-ts-styled-components/FileUpload\";\n\nexport default () => <FileUpload />;\n",
    "vue-js": "<template>\n  <file-upload />\n</template>\n<script>\nimport Vue from \"vue\";\nimport FileUpload from \"@govtnz/ds/build/vue-js/FileUpload.vue\";\n\nexport default { components: { \"file-upload\": FileUpload } };\n</script>\n",
    "vue-ts": "<template>\n  <file-upload />\n</template>\n<script lang=\"ts\">\nimport Vue from \"vue\";\nimport FileUpload from \"@govtnz/ds/build/vue-ts/FileUpload.vue\";\n\nexport default { components: { \"file-upload\": FileUpload } };\n</script>\n",
    "scss": "",
    "html": "<!--\nRemember to add these styles:\nin CSS: FileUpload.css\nOR in Sass (SCSS): FileUpload.scss\n-->\n<div class=\"g-fileUpload-form-group\">\n  <label class=\"g-fileUpload-label\"> Upload a file </label>\n  <input class=\"g-file-upload\" type=\"file\" />\n</div>\n",
    "css": "",
    "twig-embed": "{% embed \"FileUpload.html.twig\" %}{% endembed %}",
    "angular": ""
  }
]