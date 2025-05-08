function simplifyPath(path: string): string {
  const chunks = path.split("/");
  const stack: string[] = [];
  for (let i = 0; i < chunks.length; i++) {
    if (chunks[i] === ".") continue;
    if (chunks[i] === "") continue;
    if (chunks[i] === "..") {
      if (stack.length > 0) {
        stack.pop();
      }
      continue;
    }
    stack.push(chunks[i]);
  }
  return "/" + stack.join("/");
}

["/home/user/Documents/../Pictures", "/../", "/.../a/../b/c/../d/./"].forEach(
  (path) => {
    console.log(simplifyPath(path));
  }
);

export {};
