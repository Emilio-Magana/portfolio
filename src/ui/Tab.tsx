interface TabButtonProps {
  onTabChange: () => void;
  label: string;
  isActive: boolean;
}

function TabButton({ onTabChange, label, isActive }: TabButtonProps) {
  return (
    <button
      className={
        isActive
          ? "mr-[2px] h-[32px] w-1/2 rounded-md bg-activeTab font-mono text-tertiary"
          : "mr-[2px] h-[32px] w-1/2 rounded-md font-mono text-nonActive"
      }
      onClick={onTabChange}
    >
      {label}
    </button>
  );
}

function Tab({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex rounded-lg border-2 border-componentBg bg-componentBg p-1">
      {children}
    </div>
  );
}

export { Tab, TabButton };
