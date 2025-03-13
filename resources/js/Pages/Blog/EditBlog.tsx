import React, { useState, useRef, useEffect } from "react";
import { useForm, usePage } from "@inertiajs/react";
import EasyMDE from "easymde";
import "easymde/dist/easymde.min.css";
import "github-markdown-css/github-markdown.css";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import TagInput from "@/Components/TagInput";
import { marked } from "marked";

const EditPost = () => {
  // 1) Grab existing blog data from Inertia props
  const { blog } = usePage().props as unknown as { blog: any };

  // 2) Initialize Inertia form with existing blog data
  const { data, setData, post, processing, errors } = useForm({
    title: blog.title || "",
    meta: blog.meta || "",
    content: blog.content || "",
    thumbnail: null as File | null,
    categories: blog.category || [],
    meta_keywords: blog.meta_keywords || [],
    status: blog.status || "draft",
  });



  // 3) Show existing thumbnail (if any)
  const [featuredImagePreview, setFeaturedImagePreview] = useState<string | null>(
    blog.thumbnail ? `/storage/${blog.thumbnail}` : null
  );

  // Refs for EasyMDE
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const easyMDERef = useRef<EasyMDE | null>(null);

  // 4) Initialize EasyMDE with the existing content
  useEffect(() => {
    if (textareaRef.current) {
      easyMDERef.current = new EasyMDE({
        element: textareaRef.current,
        spellChecker: false,
        placeholder: "Write your blog post in Markdown...",
        initialValue: data.content, // pass the current content as initialValue
        toolbar: [
          "bold",
          "italic",
          "heading",
          "|",
          "unordered-list",
          "ordered-list",
          "|",
          "link",
          "quote",
          "code",
          "image",
          "table",
          "horizontal-rule",
          "|",
          "preview",
          "|",
          "guide",
        ],
       // Wrap preview content in .markdown-body so GitHub Markdown CSS applies formatting
               previewRender: function (plainText) {
                   return `<div class="markdown-body">${marked(plainText)}</div>`;
                 },
      });

      // Update the form state when the editor changes
      easyMDERef.current.codemirror.on("change", () => {
        const value = easyMDERef.current?.value() || "";
        setData("content", value);
      });
    }
    return () => {
      if (easyMDERef.current) {
        easyMDERef.current.toTextArea();
        easyMDERef.current = null;
      }
    };
  }, []);

  // 5) Handle new image uploads
  const handleFeaturedImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setData("thumbnail", file);
      setFeaturedImagePreview(URL.createObjectURL(file));
    }
  };

  // 6) Submit the form using patch with forceFormData
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (easyMDERef.current) {
      // Ensure the latest content from the editor is set
      setData("content", easyMDERef.current.value());
    }
 
    // Pass form data as the second argument and options (forceFormData) as the third.
    post(route("blogs.update", blog.slug), {
     
      ...data,
      forceFormData: true,
    });
  };

  return (
    <Authenticated>
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4">Edit Blog</h1>

        <form onSubmit={submit} className="space-y-4">
          {/* Title Input */}
          <div>
            <label className="block text-sm font-medium">Title:</label>
            <input
              type="text"
              placeholder="Title"
              value={data.title}
              onChange={(e) => setData("title", e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
            {errors.title && (
              <InputError message={errors.title} className="mt-2 text-xs text-red-600" />
            )}
          </div>

          {/* Meta Input */}
          <div>
            <label className="block text-sm font-medium">Meta:</label>
            <input
              type="text"
              placeholder="Meta"
              value={data.meta}
              onChange={(e) => setData("meta", e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
            {errors.meta && (
              <InputError message={errors.meta} className="mt-2 text-xs text-red-600" />
            )}
          </div>

          {/* Categories Input */}
          <div>
            <label className="block text-sm font-medium">Categories:</label>
            <TagInput
              items={data.categories}
              setItems={(newCategories) => setData("categories", newCategories)}
              placeholder="Add a category"
            />
            {errors.categories && (
              <InputError message={errors.categories} className="mt-2 text-xs text-red-600" />
            )}
          </div>

          {/* Meta Keywords Input */}
          <div>
            <label className="block text-sm font-medium">Meta Keywords:</label>
            <TagInput
              items={data.meta_keywords}
              setItems={(newKeywords) => setData("meta_keywords", newKeywords)}
              placeholder="Add a keyword"
            />
            {errors.meta_keywords && (
              <InputError message={errors.meta_keywords} className="mt-2 text-xs text-red-600" />
            )}
          </div>

          {/* Status Select */}
          <div>
            <label className="block text-sm font-medium">Status:</label>
            <select
              value={data.status}
              onChange={(e) => setData("status", e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
            {errors.status && (
              <InputError message={errors.status} className="mt-2 text-xs text-red-600" />
            )}
          </div>

          {/* Featured Image Upload */}
          <div>
            <label className="block text-sm font-medium">Featured Image:</label>
            <input type="file" accept="image/*" onChange={handleFeaturedImageUpload} />
            {featuredImagePreview && (
              <img
                src={featuredImagePreview}
                alt="Featured Preview"
                className="mt-2 w-full aspect-5/3 object-cover"
              />
            )}
            {errors.thumbnail && (
              <InputError message={errors.thumbnail} className="mt-2 text-xs text-red-600" />
            )}
          </div>

          {/* EasyMDE Markdown Editor */}
          <div>
            <label className="block text-sm font-medium">Content:</label>
            <textarea defaultValue={data.content} ref={textareaRef} />
            {errors.content && (
              <InputError message={errors.content} className="mt-2 text-xs text-red-600" />
            )}
          </div>

          <button
            type="submit"
            disabled={processing}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {processing ? "Updating..." : "Update"}
          </button>
        </form>
      </div>
    </Authenticated>
  );
};

export default EditPost;
