"use client"

import * as React from "react"
import { X } from "lucide-react"

interface TagInputProps {
  items: string[]
  setItems: (newItems: string[]) => void
  placeholder?: string
}

export default function TagInput({ items, setItems, placeholder }: TagInputProps) {
  const [inputValue, setInputValue] = React.useState("")
  const inputRef = React.useRef<HTMLInputElement>(null)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault()
      setItems([...items, inputValue.trim()])
      setInputValue("")
    } else if (e.key === "Backspace" && inputValue === "" && items.length > 0) {
      setItems(items.slice(0, -1))
    }
  }

  const removeItem = (indexToRemove: number) => {
    setItems(items.filter((_, index) => index !== indexToRemove))
  }

  return (
    <div
      className="flex flex-wrap items-center gap-2 p-2 border border-gray-300 rounded min-h-[40px]"
      onClick={() => inputRef.current?.focus()}
      onKeyDown={handleKeyDown}
      tabIndex={0} // for keyboard events
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-1 px-2 py-1 text-sm text-blue-800 bg-blue-100 rounded-full"
        >
          {item}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              removeItem(index)
            }}
            className="flex items-center justify-center w-4 h-4 hover:text-blue-600 transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      ))}
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={placeholder || "Add an item"}
        className="flex-1 min-w-[150px] bg-transparent text-gray-800 placeholder:text-gray-400 focus:outline-hidden"
      />
    </div>
  )
}
