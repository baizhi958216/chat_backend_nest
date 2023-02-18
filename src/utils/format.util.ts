class Format {
  static instance: Format;

  private constructor() {
    return;
  }

  static getInstance(): Format {
    if (!Format.instance) {
      Format.instance = new Format();
    }

    return Format.instance;
  }

  message(status: number, res: any) {
    return {
      status: status,
      msg: res,
    };
  }
}
export { Format };
