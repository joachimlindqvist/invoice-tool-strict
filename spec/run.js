import Jasmine from 'jasmine'

var jasmine = new Jasmine()
jasmine.loadConfig({
    "spec_dir": "spec",
    "spec_files": [
        "**/*[sS]pec.js"
    ],
    "helpers": [
        "helpers/**/*.js"
    ]
})
jasmine.execute()
