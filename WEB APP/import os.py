import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY', 'dev-secret')   # change in production
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
        'sqlite:///' + os.path.join(BASE_DIR, 'data', 'app.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # Google Sheets (optional)
    GSPREAD_SERVICE_ACCOUNT_FILE = os.environ.get('GSPREAD_SERVICE_ACCOUNT_FILE', '')
    GSPREAD_SHEET_NAME = os.environ.get('GSPREAD_SHEET_NAME', 'AttendanceSheet')
