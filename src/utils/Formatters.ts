export function formatCurrency(value: string, prefix = 'R$'): string {
    const raw = value.replace(/\D/g, '');
    if (!raw) return '';

    const number = (parseInt(raw, 10) / 100).toFixed(2);

    const formatted = number.replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    return `${prefix} ${formatted}`;
}

