import Search from "@/app/components/dashboard/search";
import Image from "next/image";
import styles from "../../components/dashboard/dashboard.module.css";
import Pagination from "@/app/components/dashboard/pagination";
import Link from "next/link";
import { products } from "@/app/data";

const ProductsPage = () => {
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
          {products.map((product) => (
            <tr key={product.name}>
              <td>
                <div className="flex gap-3 items-center">
                  <Image
                    src="/noproduct.jpg"
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-sm"
                  />
                  {product.title}
                </div>
              </td>
              <td>{product.desc}</td>
              <td>{product.price}</td>
              <td>{product.createdAt}</td>
              <td>{product.stock}</td>
              <td>
                <div className="flex gap-4">
                  <Link href="/dashboard/products/id">
                    <button className={`btn_primary`}>View</button>
                  </Link>
                  <button className={`btn_danger`}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default ProductsPage;
