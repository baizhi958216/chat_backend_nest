import { readFile } from 'fs';

class FileUtil {
  static instance: FileUtil;

  private constructor() {
    return;
  }

  static getInstance(): FileUtil {
    if (!FileUtil.instance) {
      FileUtil.instance = new FileUtil();
    }

    return FileUtil.instance;
  }

  readTemplate(fName: string): Promise<string> {
    return new Promise((resove, reject) => {
      readFile(
        `${process.cwd()}/src/template/${fName}`,
        'utf8',
        (err, data) => {
          if (err) {
            reject(err);
          }
          resove(data.toString());
        },
      );
    });
  }
}
export { FileUtil };
