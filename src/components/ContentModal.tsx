
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, ExternalLink } from "lucide-react"

interface ContentModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  content: string
  linkText: string
  linkUrl: string
}

export function ContentModal({
  isOpen,
  onClose,
  title,
  content,
  linkText,
  linkUrl,
}: ContentModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="pt-4">
            {content}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6 flex items-center justify-end space-x-4">
          <Button variant="outline" onClick={onClose}>
            <X className="mr-2 h-4 w-4" />
            Close
          </Button>
          <a href={linkUrl} target="_blank" rel="noopener noreferrer">
            <Button>
              <ExternalLink className="mr-2 h-4 w-4" />
              {linkText}
            </Button>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  )
}
