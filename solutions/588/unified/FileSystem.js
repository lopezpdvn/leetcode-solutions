class FileSystem {
  constructor() {
    this.root = new File();
  }

  ls(fPath) {

  }

  mkDir(fPath) {}

  addContentToFile(fPath) {}

  readContentFromFile() {}
}

class File {
  constructor(kind = FileKind.File) {
    this.kind = kind;
    this.files = undefined;
    this.content = undefined;
  }
}

const FileKind = {
  File: 0, Directory: 1
}
