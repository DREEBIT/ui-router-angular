export interface ResolveDecorator {
    (bindingPropertyName?: string): any;
    new (bindingPropertyName?: string): any;
}
export interface Resolve {
    /**
     * Name used when instantiating a component in the template.
     */
    bindingPropertyName?: string;
}
export declare const Resolve: ResolveDecorator;
