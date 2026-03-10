import { Container, Filters, Title, TopBar } from "@/components/shared";

export default function Home() {
  return (
    <div>
      <Container className="mt-10">
        <Title size="xl" text="Все пиццы" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* List of orders */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">Список товаров</div>
          </div>
        </div>
      </Container>
    </div>
  );
}
