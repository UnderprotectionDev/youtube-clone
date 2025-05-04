import { trpc } from "@/trpc/client";
import { UploadDropzone } from "@/lib/uploadthing";
import { ResponsiveModal } from "@/components/responsive-modal";

interface BannerUploadModalProps {
  userId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BannerUploadModal({
  userId,
  open,
  onOpenChange,
}: BannerUploadModalProps) {
  const utils = trpc.useUtils();

  const onUploadComplete = () => {
    utils.users.getOne.invalidate({ id: userId });
    onOpenChange(false);
  };

  return (
    <ResponsiveModal
      title="Upload a banner"
      open={open}
      onOpenChange={onOpenChange}
    >
      <UploadDropzone
        endpoint="bannerUploader"
        onClientUploadComplete={onUploadComplete}
        className="ut-button:bg-black ut-button:text-white ut-button:hover:bg-gray-800 ut-label:text-black ut-allowed-content:text-black ut-allowed-content:text-sm mt-2 p-10"
      />
    </ResponsiveModal>
  );
}
