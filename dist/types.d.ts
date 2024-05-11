import React from 'react';

interface SmartRatingProps {
    testIdPrefix: string;
    title?: string;
    theme: "primary" | "secondary";
    disabled?: boolean;
}

declare const SmartRating: React.FC<SmartRatingProps>;

export { SmartRating as default };
