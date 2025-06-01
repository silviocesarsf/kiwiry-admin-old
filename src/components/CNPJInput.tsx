import { InputBase } from '@mantine/core';
import { IMaskInput } from 'react-imask';

interface CNPJInputProps {
    showLabel?: boolean
}

export default function CNPJInput({ showLabel = true }: CNPJInputProps) {
    return (
        <InputBase
            className='w-full'
            component={IMaskInput}
            mask="00.000.000/0000-00"
            placeholder="CNPJ"
            label={showLabel && "CNPJ"}
        />
    );
}
