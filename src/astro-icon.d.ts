declare module 'astro-icon/components' {
    import { AstroComponent } from 'astro';
    export const Icon: AstroComponent<{ name: string; pack?: string; title?: string; }>;
}