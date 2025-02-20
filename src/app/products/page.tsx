import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductPage = () => {
  return (
    <div className="rounded-xl border border-red-500 p-5">
      <h1 className="text-red-500">products pages</h1>
      <Button>FSW 7.0</Button>
      <Input placeholder="Enter your name" />
    </div>
  );
};

export default ProductPage;
