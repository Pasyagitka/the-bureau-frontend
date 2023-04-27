import BrigadierDetails from "@/components/brigadier/brigadierDetails/BrigadierDetails";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { get, getRequests } from "@/redux/actions/brigadiers";
import { useEffect } from "react";
import AccentButton from "@/elements/buttons/AccentButton";
import { getFullReport } from "@/redux/actions/requests";
import { getFile as getInvoice, getForBrigadier } from "@/redux/actions/invoices";
import BrigadierRequests from "./BrigadierRequests";
import BrigadierSchedule from "./BrigadierSchedule";
import BrigadierInvoices from "./BrigadierInvoices";

function BrigadierHome() {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.auth.user);
  const requests = useAppSelector((state) => state.brigadiers.requests);
  const brigadier = useAppSelector((state) => state.brigadiers.brigadier);
  const invoices = useAppSelector((state) => state.invoices.invoices);

  function loadAll() {
    dispatch(getRequests(user?.brigadier?.id));
    dispatch(get(user?.brigadier?.id));
    dispatch(getForBrigadier({ limit: 10, offset: 0, brigadierId: user?.brigadier?.id }));
  }
  useEffect(loadAll, [user]);

  const handleRequestDownload = (id: number) => {
    dispatch(getFullReport(id));
  };

  const handleInvoiceDownload = (id: number) => {
    dispatch(getInvoice(id));
  };

  return (
    <>
      <div className="flex w-full">
        <div className="flex flex-col w-4/5">
          <BrigadierDetails brigadier={brigadier} />
          <div className="w-full h-16 mx-12">
            <AccentButton to="invoice/create" title="Запросить счет на комплектующие" />
          </div>
        </div>
        <BrigadierSchedule />
      </div>
      <BrigadierInvoices invoices={invoices} handleDownload={(id) => handleInvoiceDownload(id)} />
      <BrigadierRequests requests={requests} handleDownload={(id) => handleRequestDownload(id)} />
    </>
  );
}

export default BrigadierHome;
