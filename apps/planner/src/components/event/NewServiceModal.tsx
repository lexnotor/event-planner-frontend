"use client";
import useToggle from "@/hooks/toggle";
import { Modal } from "antd";
import { Button } from "ui";
import AddService from "./AddService";
import NewEventContext, { useNewEventContext } from "./context/NewEventContext";
import { LaunchServices } from "./gigs";

const NewServiceModal = ({ id }: { id?: string }) => {
    const context = useNewEventContext();

    const [isOpen, setIsOpen] = useToggle(false);

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
            >
                {context.services.length == 0 ? (
                    <AddService />
                ) : (
                    <>
                        <LaunchServices id={context.services[0].id} />
                        <div className="mt-4 text-right">
                            <Button size="small" onClick={() => alert(id)}>
                                Enregistrer
                            </Button>
                        </div>
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
