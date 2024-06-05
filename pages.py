from flask import Flask, render_template, request, redirect

app = Flask(__name__)

users = []

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        for user in users:
            if user['email'] == email and user['password'] == password:
                return redirect('/')
        return redirect('/login')
    
    
    return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        users.append({'email': email, 'password': password})
        return redirect('/')
    return render_template('register.html')

if __name__ == '__main__':
    app.run(debug=True)
