import ClientSmall from "@/elements/clientSmall/ClientSmall";
import { ClientDto } from "@/types/dto/client/clientDto";

function ClientItem({ client }: { client: ClientDto }) {
  return <ClientSmall client={client} />;
}

export default ClientItem;
