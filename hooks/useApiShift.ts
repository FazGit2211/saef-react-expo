import { useState } from "react";

interface ShiftType {
    day: string,
    time: string,
    price: number
};
interface ErrorShiftType {
    errorValue: boolean,
    message: string
};
const useApiShift = (url: string) => {
    const [dataShift, setDataShift] = useState<ShiftType[]>([]);
    const [errorShift, setErrorShift] = useState<ErrorShiftType>({ errorValue: false, message: "" });
    const [loadingShift, setLoadingShift] = useState(false);

    const getShiftById = async (id: number) => {
        try {
            setLoadingShift(true);
            const options: RequestInit = {
                method: "GET",
                headers: { "content-type": "application/json" },
            };
            const response = await fetch(`${url}/${id}`, options);
            if (response.ok) {
                const dataValues = await response.json();
                setDataShift(dataValues);
                setErrorShift({ errorValue: false, message: "Get ok." });
            } else {
                const dataInfo = await response.json();
                setErrorShift({ errorValue: true, message: `${dataInfo.message.info}` });
            };
        } catch (error: unknown) {
            if (error instanceof Error) {
                setErrorShift({ errorValue: true, message: error.message });
            };
        } finally {
            setLoadingShift(false);
        };
    };
    return { dataShift, loadingShift, errorShift, getShiftById }
};

export default useApiShift;