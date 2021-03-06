export declare class MWCTheme {
    themeEl: HTMLElement;
    theme: object;
    fonts: Array<string>;
    icons: Array<string>;
    fontsAndIcons: Array<string>;
    constructor();
    setLinkNode(fontUrl: any): void;
    componentWillLoad(): void;
    render(): JSX.Element;
}
