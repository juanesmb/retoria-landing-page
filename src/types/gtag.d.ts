export {};

declare global {
  type GtagCustomParams = Record<string, unknown>;
  interface GtagConfigParams extends GtagCustomParams {
    send_page_view?: boolean;
    debug_mode?: boolean;
  }

  interface Window {
    gtag:
      | ((command: "js", date: Date) => void)
      | ((command: "config", targetId: string, config?: GtagConfigParams) => void)
      | ((command: "event", eventName: string, params?: GtagCustomParams) => void)
      | ((command: "set", params: GtagCustomParams) => void);
    dataLayer: GtagCustomParams[];
  }
}

