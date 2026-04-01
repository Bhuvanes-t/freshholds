import sys

pdf_path = r"d:\Bhuvaneswaran\pro\FreshHold's opening ceremony 250326.pdf"

try:
    import pypdf
    reader = pypdf.PdfReader(pdf_path)
    print("USING PYPDF")
    print(''.join(p.extract_text() for p in reader.pages))
    sys.exit(0)
except ImportError:
    pass

try:
    import PyPDF2
    reader = PyPDF2.PdfReader(pdf_path)
    print("USING PYPDF2")
    print(''.join(p.extract_text() for p in reader.pages))
    sys.exit(0)
except ImportError:
    pass

try:
    import fitz
    doc = fitz.open(pdf_path)
    print("USING FITZ")
    print(''.join(page.get_text() for page in doc))
    sys.exit(0)
except ImportError:
    print("No PDF library found.")
