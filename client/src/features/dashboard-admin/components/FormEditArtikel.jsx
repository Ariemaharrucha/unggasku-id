import { useParams, Link } from "react-router-dom";
import { DashboardAdminLayout } from "../../../layouts/DashboardAdminLayout.jsx";
import Input from "../../../components/ui/Input.jsx";
import Button from "../../../components/ui/Button.jsx";
import ReactQuill from "react-quill";
import { useUpdateArtikel } from "../hooks/useUpdateArtikel.jsx";

export const FormEditArtikel = () => {
  const { id } = useParams();
  const {
    artikel,
    isLoading,
    successMessage,
    error,
    imagePreview,
    formData,
    handleInputChange,
    handleImageChange,
    handleContentChange,
    handleSubmit,
  } = useUpdateArtikel(id);

  if (!artikel) {
    return <p>Loading...</p>;
  }

  return (
    <DashboardAdminLayout>
      <main>
        <section className="sticky top-0 z-[2] flex items-center justify-between bg-white py-1 mx-32">
          <h3 className="text-lg text-black">Edit Artikel</h3>
        </section>
        <section className="max-w-2xl m-auto mt-1">
          <form className="space-y-3" onSubmit={handleSubmit}>
            {/* judul */}
            <div>
              <label htmlFor="judul">Judul Artikel</label>
              <Input
                id="judul"
                name="judul"
                placeholder="Judul artikel"
                className="mt-2 font-normal"
                value={formData.judul}
                onChange={handleInputChange}
              />
            </div>
            {/* author name */}
            <div>
              <label htmlFor="author_name">Nama Author</label>
              <Input
                id="author_name"
                name="author_name"
                placeholder="Nama author"
                className="mt-2 font-normal"
                value={formData.author_name}
                onChange={handleInputChange}
              />
            </div>
            {/* kategori */}
            <div>
              <label htmlFor="kategori">Kategori</label>
              <select
                id="kategori"
                name="kategori"
                className="w-full border mt-2 p-2 rounded-md bg-white"
                value={formData.kategori}
                onChange={handleInputChange}
              >
                <option value="">Pilih kategori</option>
                <option value="pakan">Pakan</option>
                <option value="lingkungan">Lingkungan</option>
                <option value="nutrisi">Nutrisi</option>
                <option value="kesehatan-unggas">Kesehatan Unggas</option>
              </select>
            </div>
            {/* konten */}
            <div>
              <label htmlFor="konten">Konten</label>
              <ReactQuill
                value={formData.konten}
                placeholder="Tulis konten di sini"
                className="block w-full mt-2"
                onChange={handleContentChange}
              />
            </div>
            {/* image-artikel */}
            <div>
              <label htmlFor="image_artikel">Add Images</label>
              <input
                type="file"
                id="image_artikel"
                name="image_artikel"
                accept=".png, .jpeg, .jpg"
                className="block w-full mt-2"
                onChange={handleImageChange}
              />
              {imagePreview && (
                <div className="mt-2 size-52 overflow-hidden rounded-md">
                  <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                </div>
              )}
            </div>
            {/* tanggal */}
            <div>
              <label htmlFor="tanggal">Tanggal</label>
              <input
                type="date"
                id="tanggal"
                name="tanggal"
                className="block w-full mt-2 border p-2 rounded-md"
                value={formData.tanggal}
                onChange={handleInputChange}
              />
            </div>
            {/* button */}
            <div className="flex gap-4">
              <Link
                to={"/dashboard/admin/artikel"}
                className="w-1/3 bg-red-600 hover:bg-red-700 rounded-lg text-white flex items-center justify-center"
              >
                Cancel
              </Link>
              <Button
                variant="secondary"
                className="w-1/3 flex items-center justify-center"
                type="submit"
              >
                {isLoading ? "Loading..." : "Edit"}
              </Button>
            </div>
          </form>
          {successMessage && <p className="text-green-500">{successMessage}</p>}
          {error && <p className="text-red-500">{error}</p>}
        </section>
      </main>
    </DashboardAdminLayout>
  );
};
