import { InputBase } from '@mantine/core';
import { IMaskInput } from 'react-imask';

export default function CNPJInput() {
    return (
        <InputBase
            className='w-full'
            component={IMaskInput}
            mask="00.000.000/0000-00"
            placeholder="00.000.000/0000-00"
            label="CNPJ"
        />
    );
}
