import { Pressable, PressableProps, Text, StyleSheet } from 'react-native';
import { Colors, Fonts, Radius } from '../tokens';

interface ButtonProps extends PressableProps {
    text: string;
    type?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
}

export function Button({text, type = 'primary', size = 'lg', ...props}: ButtonProps) {
    return (
        <Pressable
            style={[
                styles.btn,
                BUTTON_VARIANTS[type],
                SIZE_STYLES[size],
            ]}
            {...props}
        >
            <Text
                style={[
                    styles.btnText,
                    TEXT_VARIANTS[type],
                    SIZE_TEXT[size],
                ]}
            >
                {text}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnPrimary: {
        backgroundColor: Colors.primary,
    },

    btnSecondary: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: Colors.primary,
    },

    btnText: {
        color: Colors.white,
    },

    btnTextPrimary: {
        color: Colors.white,
    },

    btnTextSecondary: {
        color: Colors.gray200,
    },
});

const SIZE_STYLES = {
    sm: {
        height: 27,
        borderRadius: Radius.r16,
    },
    md: {
        height: 43,
        borderRadius: Radius.r12,
    },
    lg: {
        height: 62,
        borderRadius: Radius.r16,
    },
};

const SIZE_TEXT = {
    sm: {
        fontSize: Fonts.f12,
    },
    md: {
        fontSize: Fonts.f14,
    },
    lg: {
        fontSize: Fonts.f14,

    },
};

const BUTTON_VARIANTS = {
    primary: styles.btnPrimary,
    secondary: styles.btnSecondary,
};

const TEXT_VARIANTS = {
    primary: styles.btnTextPrimary,
    secondary: styles.btnTextSecondary,
};