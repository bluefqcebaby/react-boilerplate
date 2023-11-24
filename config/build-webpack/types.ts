type Mode = 'development' | 'production';

export interface IBuildPaths {
  entry: string;
  output: string;
  htmlFile: string;
  src: string;
}

export interface IBuildOptions {
  mode: Mode;
  port: number;
  paths: IBuildPaths;
}
