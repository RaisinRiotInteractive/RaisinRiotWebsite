export interface ThemeConfig {
    id: string;
    label: string;
    // Core Layout
    background: string; // The main wrapper background
    fontFamily: string; // Font class

    // Text
    textPrimary: string;
    textSecondary: string;
    textAccent: string; // Special emphasis

    // Containers (Modals, Cards)
    cardBackground: string;
    cardBorder: string;
    cardShadow: string;

    // Grid
    gridBackground: string; // Behind letters
    gridText: string;
    gridBorder: string;
    gridHeaderBackground: string;
    gridHeaderText: string;

    // Elements
    buttonPrimary: string;
    buttonSecondary: string;

    // States
    highlightColor: string; // Default selection highlight
    highlightColors: string[]; // Varied colors for words

    // Special Effects
    glowEffect: string; // Box shadow for neon glow or empty for none
}

export const THEMES: Record<string, ThemeConfig> = {
    cosmic: {
        id: 'cosmic',
        label: 'Galaxy Purple',
        background: 'bg-[#0e071e]',
        fontFamily: 'font-body',

        textPrimary: 'text-[#f4f1e8]',
        textSecondary: 'text-[#9f96c2]',
        textAccent: 'text-[#ffd23f]',

        cardBackground: 'bg-[#1a0f35]',
        cardBorder: 'border-[#28144c]',
        cardShadow: 'shadow-[inset_0_-8px_0_#1e0d3c,0_8px_24px_rgba(0,0,0,0.45)]',

        gridBackground: 'bg-[#120925]',
        gridText: 'text-[#f4f1e8]',
        gridBorder: 'border-[#28144c]',
        gridHeaderBackground: 'bg-[#331960]',
        gridHeaderText: 'text-[#b58aff]',

        buttonPrimary: 'btn-pressable btn-gold',
        buttonSecondary: 'btn-pressable btn-indigo',

        highlightColor: 'bg-[#ffd23f] text-[#100b1e]',
        highlightColors: [
            'bg-[#ffd23f] text-[#100b1e]',
            'bg-[#5fd68a] text-[#100b1e]',
            'bg-[#8fd8ff] text-[#100b1e]',
            'bg-[#b58aff] text-[#100b1e]',
            'bg-[#ff7a45] text-[#100b1e]',
            'bg-[#4fd1c5] text-[#100b1e]',
        ],
        glowEffect: 'drop-shadow-[0_0_24px_rgba(181,138,255,0.35)]'
    },
    classic: {
        id: 'classic',
        label: 'Galaxy Purple',
        background: 'bg-[#0e071e]',
        fontFamily: 'font-body',

        textPrimary: 'text-[#f4f1e8]',
        textSecondary: 'text-[#9f96c2]',
        textAccent: 'text-[#ffd23f]',

        cardBackground: 'bg-[#1a0f35]',
        cardBorder: 'border-[#28144c]',
        cardShadow: 'shadow-[inset_0_-8px_0_#1e0d3c,0_8px_24px_rgba(0,0,0,0.45)]',

        gridBackground: 'bg-[#120925]',
        gridText: 'text-[#f4f1e8]',
        gridBorder: 'border-[#28144c]',
        gridHeaderBackground: 'bg-[#331960]',
        gridHeaderText: 'text-[#b58aff]',

        buttonPrimary: 'btn-pressable btn-gold',
        buttonSecondary: 'btn-pressable btn-indigo',

        highlightColor: 'bg-[#ffd23f] text-[#100b1e]',
        highlightColors: [
            'bg-[#ffd23f] text-[#100b1e]',
            'bg-[#5fd68a] text-[#100b1e]',
            'bg-[#8fd8ff] text-[#100b1e]',
            'bg-[#b58aff] text-[#100b1e]',
            'bg-[#ff7a45] text-[#100b1e]',
            'bg-[#4fd1c5] text-[#100b1e]',
        ],
        glowEffect: 'drop-shadow-[0_0_24px_rgba(181,138,255,0.35)]'
    },
};
