import React, { useState, useRef, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import EasyMDE from "easymde";
import "easymde/dist/easymde.min.css";
import "github-markdown-css/github-markdown.css";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError"; // Ensure the path is correct
import TagInput from "@/Components/TagInput"; // Reusable tag input for categories & meta keywords
import { marked } from "marked";


const CreateBlog = () => {
  const { data, setData, post, processing, errors } = useForm({
    title: "",
    meta: "",
    content: "",
    thumbnail: null as File | null,
    categories: [] as string[],
    meta_keywords: [] as string[],
    status: "draft",
  });

  const [featuredImagePreview, setFeaturedImagePreview] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const easyMDERef = useRef<EasyMDE | null>(null);

  useEffect(() => {
    if (textareaRef.current) {
      easyMDERef.current = new EasyMDE({
        element: textareaRef.current,
        spellChecker: false,
        placeholder: "Write your blog post in Markdown...",
        initialValue: data.content,
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

      // Update form state on editor changes
      easyMDERef.current.codemirror.on("change", () => {
        const value = easyMDERef.current?.value() || "";
        setData((prevData) => ({ ...prevData, content: value }));
      });
      
    }
    return () => {
      if (easyMDERef.current) {
        easyMDERef.current.toTextArea();
        easyMDERef.current = null;
      }
    };
  }, []);

  const handleFeaturedImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Set the file to the "thumbnail" field to match your backend
      setData("thumbnail", file);
      setFeaturedImagePreview(URL.createObjectURL(file));
    }
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (easyMDERef.current) {
      setData("content", easyMDERef.current.value());
    }
    post("/blog/create");
  };

  return (
    <Authenticated>
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4">Create Blog</h1>
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
            <input
              className="border w-full p-2 rounded-sm focus:border-blue-500"
              type="file"
              accept="image/*"
              onChange={handleFeaturedImageUpload}
            />
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
            <textarea ref={textareaRef} />
            {errors.content && (
              <InputError message={errors.content} className="mt-2 text-xs text-red-600" />
            )}
          </div>

          <button
            type="submit"
            disabled={processing}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {processing ? "Uploading..." : "Submit"}
          </button>
        </form>
      </div>
    </Authenticated>
  );
};

export default CreateBlog;
