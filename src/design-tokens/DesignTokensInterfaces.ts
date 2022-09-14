export interface DesignTokensItem {
  value: any;
  type: string;
  description?: string;
}

export interface DesignTokensItems {
  [key: string]: DesignTokensItem;
}

export interface DesignTokensData {
  [key: string]: DesignTokensItems | DesignTokensItem;
}
