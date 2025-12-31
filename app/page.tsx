import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Button } from "@heroui/button";
import { Switch } from "@heroui/switch";
import { Image } from "@heroui/image";

export default function Home() {
  return (
    <div>
      <h4 className="font-bold text-large">Página de Componentes</h4>
      <Divider className="my-4" />
      <span className="text-default-500">Botones</span>
      <div className="my-5 flex gap-2">
        <Button>Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="danger">Danger</Button>
        <Button color="success" variant="flat" isLoading>
          Flat
        </Button>
        <Button color="danger" variant="bordered" isLoading>
          Bordered
        </Button>
      </div>
      <span className="text-default-500">Cards</span>
      <div className="mt-5 flex gap-2">
        <Card>
          <CardHeader className="flex-col items-start">
            <h5 className="font-bold">Cargador portatil</h5>
            <small className="text-tiny">Cargador con mas de 4 whatts de potencia</small>
          </CardHeader>
          <CardBody>
            <Image
              alt="Card de prueba"
              className="object-cover rounded-xl"
              src="https://samsung-bolivia.s3.amazonaws.com/product-family-item-image-image/square/product-family-item-image-image_IwZJQaRG9MC4tYKx01Fy.png"
              width={270}
            />
          </CardBody>
          <CardFooter className="flex justify-between">
            <Button color="primary" size="sm">
              Comprar
            </Button>
            <Button color="primary" variant="bordered" size="sm">
              Agregar al carrito
            </Button>
          </CardFooter>
        </Card>
        <Switch defaultSelected color="danger">
          Género
        </Switch>
      </div>
    </div>
  );
}
