// Loader.tsx
export default function Loader({ size = 8 }: { size?: number }) {
    return (
      <div className="flex justify-center items-center py-10">
        <div
          className={`w-${size} h-${size} border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin`}
        />
      </div>
    )
  }
  