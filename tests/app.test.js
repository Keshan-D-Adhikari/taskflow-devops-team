
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");
const path = require("path");

test("index.html exists", () => {
    const file = path.join(__dirname, "..", "src", "index.html");
    assert.equal(fs.existsSync(file), true);
});

test("Todo application contains required UI elements", () => {
    const file = path.join(__dirname, "..", "src", "index.html");
    const html = fs.readFileSync(file, "utf8");

    assert.ok(html.includes('id="taskInput"'));
    assert.ok(html.includes('id="addTaskBtn"'));
    assert.ok(html.includes('id="taskList"'));
    assert.ok(html.includes('id="taskCounter"'));
});

test("JavaScript application file exists", () => {
    const file = path.join(
        __dirname,
        "..",
        "src",
        "scripts",
        "app.js"
    );

    assert.equal(fs.existsSync(file), true);
});
