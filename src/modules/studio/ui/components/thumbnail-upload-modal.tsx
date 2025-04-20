import { ResponsiveModal } from "@/components/responsive-modal";
import { UploadDropzone } from "@/lib/uploadthing";
import { trpc } from "@/trpc/client";

interface ThumbnailUploadModalProps {
  videoId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ThumbnailUploadModal({
  videoId,
  open,
  onOpenChange,
}: ThumbnailUploadModalProps) {
  const utils = trpc.useUtils();

  const onUploadComplete = () => {
    utils.studio.getMany.invalidate();
    utils.studio.getOne.invalidate({ id: videoId });
    onOpenChange(false);
  };

  return (
    <ResponsiveModal
      open={open}
      onOpenChange={onOpenChange}
      title="Upload a thumbnail"
    >
      <UploadDropzone
        endpoint="thumbnailUploader"
        input={{ videoId }}
        className="ut-button:bg-black ut-button:text-white ut-button:hover:bg-gray-800 ut-label:text-black ut-allowed-content:text-black ut-allowed-content:text-sm mt-2 p-10"
        onClientUploadComplete={onUploadComplete}
      />
    </ResponsiveModal>
  );
}
