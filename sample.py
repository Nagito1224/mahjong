from js import sessionStorage, window

def main():
    image_data = sessionStorage.getItem('capturedImage')
    sessionStorage.removeItem('capturedImage')

    # image_dataに対して処理を行う

    sessionStorage.setItem("resultImage", image_data)
    window.location.href = './result.html'


if __name__ == "__main__":
    main()