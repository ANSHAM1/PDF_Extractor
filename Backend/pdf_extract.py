import fitz
import os
from PIL import Image

def extract_text_from_pdf(path_to_pdf):
    doc = fitz.open(path_to_pdf)
    with open("./static/Content/output.txt", "wb") as out:
        for page in doc:
            text = page.get_text().encode("utf8")
            out.write(text)
            out.write(bytes((12,)))

def extract_images_from_pdf(path_to_pdf):
    doc = fitz.open(path_to_pdf)
    for i in range(len(doc)):
        page = doc[i]
        image_list = page.get_images(full=True)
        for image_index, img in enumerate(image_list, start=1):
            xref = img[0]
            base = os.path.join("./static/Images", f"page_{i}_image_{image_index}")
            pix = fitz.Pixmap(doc, xref)
            if pix.n > 4:  
                pix = fitz.Pixmap(fitz.csRGB, pix)
            pix.save(f"{base}.png")



extract_text_from_pdf("./static/file.pdf")
extract_images_from_pdf("./static/file.pdf")
