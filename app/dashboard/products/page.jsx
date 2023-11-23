import Search from "@/app/components/dashboard/search";
import Image from "next/image";
import styles from "../../components/dashboard/dashboard.module.css";
import Pagination from "@/app/components/dashboard/pagination";
import Link from "next/link";
// import { products } from "@/app/data";
import { searchParams } from "next/navigation";
import { fetchProducts } from "@/app/lib/fetcher";
import { deleteProduct } from "@/app/lib/actions";

const ProductsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const pageNumber = searchParams?.page || 1;
  const { count, products } = await fetchProducts(q, pageNumber);

  return (
    <div className="bg-[var(--bgSoft)] p-4 rounded-sm">
      <div className="flex justify-between items-center mr-4 mb-7">
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className="btn_primary">Add New</button>
        </Link>
      </div>
      <table className={`w-full ${styles.table}`}>
        {/* --------------Table Head----------------- */}
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        {/* --------------Table Body----------------- */}
        <tbody>
          {products?.map((product) => (
            <tr key={product.name}>
              <td>
                <div className="flex gap-3 items-center">
                  <Image
                    src={"/noproduct.jpg"}
                    // src={product.img || "/noproduct.jpg"}
                    alt="product image"
                    width={40}
                    height={40}
                    className="rounded-sm"
                  />
                  {product.title}
                </div>
              </td>
              <td>{product.desc}</td>
              <td>{product.price}</td>
              <td>{product.createdAt?.toString().slice(4, 16)}</td>
              <td>{product.stock}</td>
              <td>
                <div className="flex gap-4">
                  <Link href={`/dashboard/products/${product.id}`}>
                    <button className={`btn_primary`}>View</button>
                  </Link>
                  <form action={deleteProduct}>
                    <input type="hidden" name="id" value={product.id} />
                    <button className={`btn_danger`}>Delete</button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default ProductsPage;
