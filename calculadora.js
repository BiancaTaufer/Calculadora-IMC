function calcularIMC(){
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);

    let imc = peso / (altura * altura);

    document.getElementById("resultado").innerText = "Seu IMC é: " + imc.toFixed(2);

    let classificacao = "";
    let explicacao = "";

    if(imc < 18.5){
    classificacao = "Abaixo do peso";
    explicacao = "Indica que a pessoa está abaixo do peso ideal. Pode estar associado a desnutrição, deficiências nutricionais ou problemas de saúde subjacentes";
    }

    else if(imc < 24.9){
    classificacao = "Peso normal";
    explicacao = "Indica uma faixa de peso considerada saudável e com menor risco de doenças crônicas.";
    }
    else if(imc < 29.9){
    classificacao = "Sobrepeso"; 
    explicacao = "Indica excesso de peso em relação à altura. Aumenta o risco para o desenvolvimento de doenças metabólicas.";
 }

    else if(imc < 34.9){
    classificacao = "Obesidade grau 1";
    explicacao = "Início da obesidade, caracterizada pelo acúmulo excessivo de gordura corporal, elevando moderadamente o risco de complicações de saúde.";
    }
    else if(imc < 39.9){
    classificacao = "Obesidade grau 2";
    explicacao = "Obesidade moderada, com risco significativo para doenças associadas (diabetes, hipertensão, etc.)."
    }
    else{
    classificacao = "Obesidade grau 3";
    explicacao = "Obesidade Grau III (Mórbida/Grave): Alto acúmulo de gordura, representando alto risco para doenças graves e mortalidade precoce.";
    }

    document.getElementById("classificacao").innerText = "Classificação: " + classificacao;
    document.getElementById("explicacao").innerText = "Explicação: " + explicacao;

}
