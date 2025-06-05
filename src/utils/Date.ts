export const getFirstLastDayOfMonth = (date: Date) => {
    const firstDateOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDateOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return { firstDateOfMonth, lastDateOfMonth };
}

export const formatDateForInput = (date: Date) => {
    const pad = (n) => String(n).padStart(2, '0');
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}
