import Image from "next/image";
import styles from "../../../components/dashboard/dashboard.module.css";
import { updateProduct } from "@/app/lib/actions";
import { fetchSingleProduct } from "@/app/lib/fetcher";

const SingleProduct = async ({ params }) => {
  const { id } = params;
  const product = await fetchSingleProduct(id);

  return (
    <div
      className={`${styles.input} flex flex-wrap gap-10 justify-center items-center mt-10`}
    >
      {/* --------------Image div---------------- */}
      <div className="bg-[var(--bgSoft)] bg-cover bg-center rounded-lg p-11">
        <Image
          src="/noproduct.jpg"
          alt=""
          width={220}
          height={220}
          className="rounded-lg"
        />
      </div>
      {/* --------------Form div---------------- */}
      <form
        action={updateProduct}
        className={`w-[600px] bg-[var(--bgSoft)] flex flex-wrap gap-7 p-10 rounded-lg`}
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            placeholder={product.title}
            name="title"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            placeholder={product.price}
            name="price"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="stock">Stock:</label>
          <input type="text" placeholder={product.stock} name="stock" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="color">Color:</label>
          <input type="text" placeholder={product.color} name="color" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="cat">Catetory:</label>
          <select name="cat" id="cat">
            <option value="kitchen" selected={product.category == "Kitchen"}>
              Kitchen
            </option>
            <option value="computer" selected={product.category == "Computer"}>
              Computer
            </option>
            <option value="phone" selected={product.category == "Phone"}>
              Phone
            </option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="desc">Product Description:</label>
          <textarea
            name="desc"
            id="desc"
            cols="30"
            rows="6"
            placeholder={product.desc}
          />
        </div>
        <button className="btn_primary px-5 py-3 font-semibold">Submit</button>
      </form>
    </div>
  );
};

export default SingleProduct;
