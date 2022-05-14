export interface DesignTokensItem {
  value: string;
  type: string;
  description?: string;
}

export interface DesignTokensItems {
  [key: string]: DesignTokensItem;
}

export interface DesignTokensData {
  [key: string]: DesignTokensItems | DesignTokensItem;
}
