from flask import Flask, render_template, request
import random, copy


app = Flask(__name__)
@app.route('/quiz')
def quiz():
    return render_template('quiz.html')


@app.route('/quiz', methods=['POST'])
def quiz_answers():
    answer = request.form['option']
    # print(answer)
    if answer == 'americano':
        return render_template("americano.html")
    if answer == 'cappuccino':
        return render_template("cappucino.html")
    if answer == 'latte':
        return render_template("latte.html")
    if answer == 'espresso':
        return render_template("espresso.html")

if __name__ == '__main__':
    app.run(debug=True)
