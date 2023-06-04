import BrigadierProfileInfo from "@/components/brigadier/brigadierProfileInfo/BrigadierProfileInfo";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { get, getRequests } from "@/redux/actions/brigadiers";
import { useEffect } from "react";
import AccentButton from "@/elements/buttons/AccentButton";
import { clearState, getFullReport } from "@/redux/actions/requests";
import { clearInvoicesState, getForBrigadier, remove } from "@/redux/actions/invoices";
import BrigadierRequestList from "../../components/brigadier/brigadierRequestsList/BrigadierRequestList";
import BrigadierSchedule from "../../components/brigadier/brigadierSchedule/BrigadierSchedule";
import BrigadierInvoices from "../../components/brigadier/brigadierInvoices/BrigadierInvoices";

function BrigadierHomePage() {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.auth.user);
  const requests = useAppSelector((state) => state.brigadiers.requests);
  const brigadier = useAppSelector((state) => state.brigadiers.brigadier);
  const invoices = useAppSelector((state) => state.invoices.invoices);

  function loadAll() {
    dispatch(clearInvoicesState());
    dispatch(clearState());
    dispatch(getRequests(user?.brigadier?.id));
    dispatch(get(user?.brigadier?.id));
    dispatch(getForBrigadier({ limit: 10, offset: 0, brigadierId: user?.brigadier?.id }));
  }
  useEffect(loadAll, [user]);

  const handleRequestDownload = (id: number) => {
    dispatch(getFullReport(id));
  };

  const handleInvoiceDownload = (url: string) => {
    window.open(url);
  };

  const handleRemove = (id: number) => {
    dispatch(remove(id));
  };

  return (
    <>
      <div className="flex w-full flex-col md:flex-row sm:flex-col">
        <div className="flex flex-col w-full md:w-4/5">
          <BrigadierProfileInfo brigadier={brigadier} />
          <div className="w-full h-16 md:mx-12 mx-2">
            <AccentButton to="invoices/create" title="Запросить счет на комплектующие" />
          </div>
        </div>
        <BrigadierSchedule />
      </div>
      <BrigadierInvoices
        invoices={invoices}
        handleDownload={(id) => handleInvoiceDownload(id)}
        handleRemove={(id) => handleRemove(id)}
      />
      <BrigadierRequestList requests={requests} handleDownload={(url) => handleRequestDownload(url)} />
    </>
  );
}

export default BrigadierHomePage;
