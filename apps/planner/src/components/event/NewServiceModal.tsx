"use client";
import useToggle from "@/hooks/toggle";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { addGigToEvent } from "@/redux/event/event.slice";
import { Modal } from "antd";
import { Button } from "ui";
import AddService from "./AddService";
import NewEventContext, { useNewEventContext } from "./context/NewEventContext";
import { LaunchServices } from "./gigs";

const NewServiceModal = ({ id }: { id?: string }) => {
    const dispatch = useAppDispatch();
    const context = useNewEventContext();

    const [isOpen, setIsOpen] = useToggle(false);

    const submitNewService = async () => {
        const { details, supplier } = context.services[0];
        await dispatch(
            addGigToEvent({ eventId: id, title: supplier, details })
        );
        context.initContext();
        setIsOpen(false);
    };

    return (
        <>
            <Button size="small" onClick={() => setIsOpen(true)}>
                Ajouter Service
            </Button>
            <Modal
                open={isOpen}
                onCancel={() => {
                    setIsOpen(false);
                    context.initContext();
                }}
                footer={null}
                destroyOnClose
                title="Ajouter Service"
            >
                {context.services.length == 0 ? (
                    <AddService />
                ) : (
                    <>
                        <LaunchServices
                            id={context.services[0].id}
                            SaveBtn={() => (
                                <Button size="small" onClick={submitNewService}>
                                    Enregistrer
                                </Button>
                            )}
                        />
                    </>
                )}
            </Modal>
        </>
    );
};

const ContextWrapper = (props: Parameters<typeof NewServiceModal>[0]) => (
    <NewEventContext>
        <NewServiceModal {...props} />
    </NewEventContext>
);

export default ContextWrapper;
