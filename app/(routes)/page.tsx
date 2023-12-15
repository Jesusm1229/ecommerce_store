import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import BillboardUI from "@/components/ui/billboard";
/* import Billboard from "@/components/ui/billboard"; */
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("9fc06433-b22e-4e6e-851b-9f55a90f4751");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <BillboardUI
          data={billboard}
        />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
};

export default HomePage;
