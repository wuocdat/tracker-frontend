import { notifications } from "@mantine/notifications";
import { AxiosError } from "axios";

const useError = () => {
    const showError = (error: unknown) => {
        const errorMessage =
            error instanceof AxiosError &&
            error.response &&
            error.response?.data &&
            error.response.data?.detail
                ? error.response.data.detail[0].msg
                    ? error.response.data.detail[0].msg
                    : error.response.data.detail
                : "SomeThing Wrong!";

        notifications.show({
            title: "Error!",
            message: errorMessage,
            color: "red",
        });
    };

    return showError;
};

export default useError;
